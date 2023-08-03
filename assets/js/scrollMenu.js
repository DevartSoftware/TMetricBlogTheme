function parseMenuItemsFromContent(options) {

  var contentContainer = options.contentContainer || 'body';
  var itemSelectors = options.itemSelectors || 'h2';
  if (typeof itemSelectors == 'string') {
    itemSelectors = [itemSelectors];
  }

  var menuItems = [];

  var levelIds = [];

  $(itemSelectors.join(','), $(contentContainer)).each(function (index, itemElement) {

    var item = $(itemElement);

    var selector = itemSelectors.reduce(function (result, selector, index) {
      return result || (item.is(selector) ? selector : result);
    }, null);
    var level = itemSelectors.indexOf(selector);

    var text = item.text();

    var id = item.prop('id');
    if (!id) {
      var levelId = text.toLowerCase().replace(/ /g, '-').replace(/[^_\w\d-]/g, '_');
      levelIds[level] = levelId;

      id = levelIds.slice(0, level + 1).join('--');

      item.prop('id', id);
    }

    var menuItem = {
      id: id,
      text: text,
      level: level
    };

    menuItems.push(menuItem);

  });

  return menuItems;

}

function initScrollMenu(options) {

  var menuContainer = options.menuContainer || 'body';
  var menuItems = options.menuItems || [];

  var menuAlwaysVisible = typeof options.menuAlwaysVisible == 'boolean' ? options.menuAlwaysVisible : true;
  var scrollDuration = options.scrollDuration || 300;
  var scrollTopOffset = options.scrollTopOffset || 0;
  var scrollBottomOffset = options.scrollBottomOffset || 0;

  var menuId = 'scroll-menu-' + Date.now() + '-' + Math.round(Math.random() * Date.now());
  var menuSelector = '#' + menuId;
  var itemIds = [];

  var skipHandleIntersectAfterAfterHashChange = false;
  var isInScrollAnimation = false;

  function buildMenu() {

    var menu = $('<ul></ul>').attr('data-menu-level', 0).prop({
      'id': menuId,
      'class': 'scroll-menu'
    });

    menu.toggleClass('visible', menuAlwaysVisible);
    menu.toggleClass('hidden', !menuAlwaysVisible);

    menuItems.forEach(function (item) {

      var anchor = $('<a></a>', { href: '#' + item.id }).text(item.text);
      var menuItem = $('<li></li>').append(anchor);

      var lastMenuItem = $('li', menu).last();

      // Check any items was added
      if (lastMenuItem.length) {

        // Find parent menu with item's level
        var menuToAppend = $(lastMenuItem).parents('ul[data-menu-level="' + item.level + '"]');

        // If not found create new menu under last item
        if (!menuToAppend.length) {
          menuToAppend = $('<ul></ul>').attr('data-menu-level', item.level);
          lastMenuItem.append(menuToAppend);
        }

        // Add item to menu with item's level
        menuToAppend.append(menuItem);

      } else {

        // Add first item
        menu.append(menuItem);
      }

      itemIds.push(item.id);

    });

    $(menuContainer).append(menu);

  }

  function updateMenuAndContent(activeItemId) {
    $(itemIds).each(function (index, itemId) {
      var itemSelector = '#' + itemId;
      var isSelectedItem = itemId == activeItemId;
      $(itemSelector).toggleClass('active', isSelectedItem);
      $(menuSelector + ' li a[href="' + itemSelector + '"]').closest('li').toggleClass('active', isSelectedItem);
    });
  }

  function scrollToItem(hash) {

    var item = $(hash);
    if (!item.length) {
      return;
    }

    isInScrollAnimation = true;

    $('html, body').animate({
      scrollTop: Math.round(item.offset().top - scrollTopOffset)
    }, scrollDuration).promise().then(function () {

      updateMenuAndContent(hash.replace('#', ''));

      isInScrollAnimation = false;
    });
  }

  function onScroll(event) {

    // Skip scroll animation
    if (isInScrollAnimation) {
      return;
    }

    // Get viewport position
    var windowScrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var viewportTop = Math.round(windowScrollTop);
    var viewportBottom = Math.round(windowScrollTop + windowHeight);

    // Get content item positions
    var items = itemIds
    .map(function (id) {

      var top;

      var item = $('#' + id);
      if (item && item.length == 1) {
        top = Math.round(item.offset().top);
      }

      return { id: id, top: top };
    })
    .sort(function (a, b) {
      return a.top - b.top;
    });

    // Find item in viewport to activate
    var itemToActivate = items.filter(function (item, index) {
      var nextItem = items[index + 1];
      var itemBottom = nextItem && nextItem.top || (viewportBottom - scrollBottomOffset);
      return item.top < viewportBottom && itemBottom > (viewportTop + scrollTopOffset);
    })[0];

    var itemToActivateId = itemToActivate && itemToActivate.id;

    // Update classes of menu items and corresponding content items
    updateMenuAndContent(itemToActivateId);
  }

  function onMenuItemClick(event) {
    if (!this.hash) {
      return;
    }

    event.preventDefault();

    var hash = this.hash;

    scrollToItem(hash);

    location.hash = hash;

  }

  $(document).ready(function () {

    // Build menu
    if (!menuItems.length) {
      return;
    }

    buildMenu();

    // Scroll to item with id from hash or sync menu with scroll position
    if (location.hash) {
      scrollToItem(location.hash);
    } else {
      onScroll();
    }

    // Set scroll and resize handler to sync menu with scroll position
    $(document).on('scroll resize', onScroll);

    // Set menu item click handler
    $(itemIds).each(function (index, id) {
      $('a[href="#' + id + '"]').on('click', onMenuItemClick);
    });

    // Add hash change listener to update menu after navigation
    $(window).on('hashchange', function (event) {

      if (isInScrollAnimation) {
        return;
      }

      skipHandleIntersectAfterAfterHashChange = true;

      scrollToItem(location.hash);
    });
  });
}
