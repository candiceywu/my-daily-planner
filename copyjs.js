var shoppingFormEl = $('#activity-form');
var shoppingListEl = $('#activity-list');

function handleFormSubmit(event) {
  event.preventDefault();

  var activityItem = $('input[name="activity-input"]').val();

  if (!activityItem) {
    console.log('No activities have been planned for this hour.');
    return;
  }

  var activityListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  activityListItemEl.text(activityItem);

  // add delete button to remove shopping list item
 activityListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
 activityListEl.append(activityListItemEl);

  // clear the form input element
  $('input[name="activity-input"]').val('');
}

function handleRemoveItem(event) {
  // convert button we pressed (`event.target`) to a jQuery DOM object
  var btnClicked = $(event.target);

  // get the parent `<li>` element from the button we pressed and remove it
  btnClicked.parent('li').remove();
}

// use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
activityListEl.on('click', '.delete-item-btn', handleRemoveItem);
activityFormEl.on('submit', handleFormSubmit);
