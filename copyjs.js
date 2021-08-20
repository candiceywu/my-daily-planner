/* <div class="row">
  <div class="col sm-2 col-md-2 col-lg-2">
    <div class="hour">5PM</div>
  </div>
  <div class="col sm-8 col-md-8 col-lg-8">
    <form id="activity-form">
      <input type="text" class="activity-input w-100" id="activity-input" name="activity-input" placeholder="Enter an activity"/>
      </form>
  </div>
  <div class="col sm-2 col-md-2 col-lg-2">
    <button class="btn btn-block btn-info float-right"><i style="font-size:24px"
        class="fa">&#xf0c7;</i></button>
  </div>
</div>

<!--form info from activity 10-->

<form id="shopping-form">
<input type="text" class="form-input w-100" id="shopping-input" name="shopping-input" placeholder="Enter item name" />
<button class="btn btn-info">Add Item</button>
</form> */


// this is the js from activity 10

var activityListEl = $("#activity-list");
// var shoppingFormEl = $('#shopping-form');
// var shoppingListEl = $('#shopping-list');


function formSubmit(event){
    event.preventDefault();
    var activityItem = $('input[name="activity-input"]').val();
    if (!activityItem){
        console.log("No activities have been planned for this time.");
        return;
    }

    // add delete button to remove activity item/entry
    activityListEl.append(
        '<button class="btn btn-info"></button>'
    );

//clear the form input element
$('input[name="activity-input"]').val('');
}

// function handleFormSubmit(event) {
//   event.preventDefault();

//   var shoppingItem = $('input[name="shopping-input"]').val();

//   if (!shoppingItem) {
//     console.log('No shopping item filled out in form!');
//     return;
//   }

//   var shoppingListItemEl = $(
//     '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
//   );
//   shoppingListItemEl.text(shoppingItem);

//   // add delete button to remove shopping list item
//   shoppingListItemEl.append(
//     '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
//   );

//   // print to the page
//   shoppingListEl.append(shoppingListItemEl);

//   // clear the form input element
//   $('input[name="shopping-input"]').val('');
// }

// function handleRemoveItem(event) {
//   // convert button we pressed (`event.target`) to a jQuery DOM object
//   var btnClicked = $(event.target);

//   // get the parent `<li>` element from the button we pressed and remove it
//   btnClicked.parent('li').remove();
// }

// // use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
// shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
// shoppingFormEl.on('submit', handleFormSubmit);