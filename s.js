function generate() {
  const block = document.getElementById("block").value.trim();
  const scale = document.getElementById("scale").value || 1;
  const underFeet = document.getElementById("underFeet").checked;
  const gridAlign = document.getElementById("gridAlign").checked;

  if (!block) {
    document.getElementById("output").textContent =
      "Please enter a block ID.";
    return;
  }

  let command = "/execute";

  // Position at player
  command += " at @p";

  // Grid align
  if (gridAlign) {
    command += " align xyz";
  }

  // Position under feet or at feet
  if (underFeet) {
    command += " positioned ~ ~-1 ~";
  }

  // Summon block_display
  command +=
    ` run summon minecraft:block_display ~ ~ ~ ` +
    `{block_state:{Name:"${block}"},` +
    `transformation:{scale:[${scale}f,${scale}f,${scale}f]}}`;

  document.getElementById("output").textContent = command;
}

function copyCommand() {
  const output = document.getElementById("output").textContent;

  if (!output || output.startsWith("Click")) return;

  navigator.clipboard.writeText(output).then(() => {
    alert("Command copied!");
  });
}
