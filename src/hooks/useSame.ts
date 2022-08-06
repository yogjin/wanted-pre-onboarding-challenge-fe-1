import { useState, useEffect } from 'react';

const useAllSame = <T>(...items: T[]) => {
  const [isAllSame, setIsAllSame] = useState<boolean>(false);

  useEffect(() => {
    setIsAllSame(items.every((i) => i === items[0]));
  }, [items]);

  return isAllSame;
};

export default useAllSame;
