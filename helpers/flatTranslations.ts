type TranslationObject = {
  [key: string]: string | TranslationObject;
};

const isString = (value: unknown): value is string => typeof value === "string";

export const flatTranslations = (translations: TranslationObject) => {
  const flatted: { [key: string]: string } = {};

  const getMessages = (_translations: TranslationObject, prefix = "") => {
    Object.keys(_translations).forEach((key) => {
      const value = _translations[key];
      if (isString(value)) {
        flatted[`${prefix ? prefix + "." : ""}${key}`] = value;
      } else {
        getMessages(value, `${prefix ? prefix + "." : ""}${key}`);
      }
    });
  };

  getMessages(translations, "");
  return flatted;
};
