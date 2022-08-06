import { useEffect, useState } from 'react';
const useValidate = (text: string, regex: RegExp) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(regex.test(text));
  }, [text, regex]);

  return isValid;
};

export default useValidate;
