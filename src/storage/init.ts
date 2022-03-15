import { ReducerStoreContext } from '../context/createDataContext';

export const isStorageRehydrated = (
  contexts: Array<ReducerStoreContext>,
): boolean => {
  return !contexts.find(context => !context?.state?.isHydrated);
};

export const hydrateStores = (
  dataContexts: Array<ReducerStoreContext>,
): void => {
  dataContexts.forEach(context => {
    if (!context?.state?.isHydrated) {
      context.hydrate();
    }
  });
};

export default {
  isStorageRehydrated,
  hydrateStores,
};
