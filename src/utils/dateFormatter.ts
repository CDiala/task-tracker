export const getValue = (inputEvent: Event) => {
  const inputDate = inputEvent.target as HTMLInputElement;
  const date = new Date(inputDate.value);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
    hour12: true,
  };

  const newDateFormat = new Intl.DateTimeFormat('en-US', options).format(date);

  const dated = newDateFormat.split('');

  dated.splice(12, 1);

  const formattedDate = dated.join('');

  // return formatted date
  return formattedDate;
};
