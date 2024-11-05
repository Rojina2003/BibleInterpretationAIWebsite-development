export function formatText(text) {
  // Replace `**bold**` syntax with <strong> tags
  let formattedText = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Replace bullet points (lines starting with * ) with <li> and wrap them in <ul>
  formattedText = formattedText.replace(
    /(?:^|\n)\* (.*?)(?=\n|$)/g,
    "<li>$1</li>"
  );
  formattedText = formattedText.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");

  // Replace `\n` with <br> for new lines (but not within list items)
  formattedText = formattedText.replace(/\n\n(?!<\/?(ul|li)>)/g, "<br>");

  // Return the formatted HTML
  return formattedText;
}
