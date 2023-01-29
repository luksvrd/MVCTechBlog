const commentFormHandler = async function (event) {
  event.preventDefault();

  // Collect values from the comment form and the post id
  // 'input name="post-id"' is in the comment.handlebars file
  const postId = document.querySelector('input[name="post-id"]').value;
  // .value is the text in the textarea. you need to add .value because the textarea is not a form element
  const body = document.querySelector('textarea[name="comment-body"]').value;
  // We need .value because the textarea is not a form element, whereas the input is a form element

  if (body) {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        postId,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.reload();
  }
};

document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
