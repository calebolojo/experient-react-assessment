export const transformNameText = (name: string) => {
  let nameText = "";
  const _name = name.split(" ");
  let title = ""; // for 'Mr.' or 'Mrs.'

  if (_name.length === 2) {
    nameText = `${_name[1]}, ${_name[0]}`;
  } else if (_name.length > 2) {
    if (_name[0] === "Mr." || _name[0] === "Mrs.") {
      title = _name.shift() || ""; // 'Mr.', 'Mrs.' removed from the _name array and assiegned into the title variable
    }

    const firstName = _name[0];
    const midNameLastNameSuffix = _name.slice(1, _name.length).join(" ");
    nameText = `${midNameLastNameSuffix}, ${firstName}${title && title.length > 0 ? ` (${title})` : ""}`;
  }

  console.log("NAMETEXT - ", nameText);
  return nameText;
};

export const getNameInitials = (name: string) => {
  const _name = name.split(", ");
  return `${_name[0].charAt(0).toUpperCase()}${_name[1].charAt(0).toUpperCase()}`;
};
