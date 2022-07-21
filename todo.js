// store todo text in var
// click add-button to add todo
// add todo - creat html element
// it should have todo-input text
// make todo list element
// append todo in todo list

$("#add-button").click(function () {
  let input = $("#todo-input");
  if (input.val() == "") {
    return;
  }
  const trashBtn = $(`
    <button class="trash-btn p-2 hover:bg-red-500 hover:text-white rounded-r-md">Trash</button>
  `);

  const checkBtn = $(`
    <button class="check-btn p-2 hover:bg-indigo-500 hover:text-white">Done</button>
  `);

  checkBtn.click((e) => {
    $(e.target).parent().parent().toggleClass("line-through done");
  });

  trashBtn.click((e) => {
    $(e.target).parent().parent().remove();
  });

  $("#todos").append(
    $("<div/>")
      .addClass(
        "todo flex items-center justify-between pl-4 m-2 w-1/2 bg-white text-indigo-500 shadow rounded-md"
      )
      .text(input.val())
      .append($("<div/>").append(checkBtn).append(trashBtn))
  );

  input.val("");
});

$("#filterTodo").change(function (e) {
  const filter = e.target.value;
  $(".todo").removeClass("hidden");

  if (filter === "active") {
    $(".todo").filter(".done").addClass("hidden");
  }
  if (filter === "completed") {
    $(".todo").filter(":not(.done)").addClass("hidden");
  }
});
