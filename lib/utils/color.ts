export const setColor1 = (red: number, green: number, blue: number) =>
  setColor(1, red, green, blue);

export const setColor2 = (red: number, green: number, blue: number) =>
  setColor(2, red, green, blue);

export const setColor3 = (red: number, green: number, blue: number) =>
  setColor(3, red, green, blue);

export const setColor4 = (red: number, green: number, blue: number) =>
  setColor(4, red, green, blue);

export const setColor5 = (red: number, green: number, blue: number) =>
  setColor(5, red, green, blue);

const setColor = (color: number, red: number, green: number, blue: number) => {
  const root: any = document.querySelector(':root');
  root.style.setProperty(`--color${color}`, `rgb(${red}, ${green}, ${blue})`);

  for (let i = 1; i < 10; i++) {
    root.style.setProperty(
      `--color${color}_${i}`,
      `rgba(${red}, ${green}, ${blue}, 0.${i})`
    );
  }

  root.style.setProperty(
    `--color${color}_95`,
    `rgba(${red}, ${green}, ${blue}, 0.95)`
  );
};
