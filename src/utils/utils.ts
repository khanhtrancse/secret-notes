export const toUpperCaseFirstLetter = (text: string): string => {
  if (!text || text.length == 0) {
    return text;
  }

  return text.slice(0, 1).toUpperCase() + text.slice(1);
};

export const formatQuery = (query: object): string => {
  if (!query) {
    return '';
  }
  let stringQuery = '?';
  for (const key in query) {
    if (typeof query[key] !== 'undefined' && query[key] !== null) {
      stringQuery += `${key}=${query[key]}&`;
    }
  }
  return stringQuery;
};

const convertTimeToString = (time: Date, format: string): string => {
  const date = new Date(time);
  const year = date.getFullYear().toString();
  const mon = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hour = ('0' + date.getHours()).slice(-2);
  const min = ('0' + date.getMinutes()).slice(-2);
  const second = ('0' + date.getSeconds()).slice(-2);

  return format
    .replace('YYYY', year)
    .replace('yyyy', year)
    .replace('dd', day)
    .replace('DD', day)
    .replace('MM', mon)
    .replace('hh', hour)
    .replace('mm', min)
    .replace('ss', second);
};

export const formatSeparator = (num: number, fixed = 2): string => {
  try {
    const result = num.toFixed(fixed);
    if (fixed > 3) {
      const part = result.split('.');
      const prefix = part[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      return `${prefix}.${part[1]}`;
    }
    return result.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } catch (err) {
    return '';
  }
};

export default {
  toUpperCaseFirstLetter,
  formatQuery,
  convertTimeToString,
  formatSeparator,
};
