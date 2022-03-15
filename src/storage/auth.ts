import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AuthTokenData = {
  __typename?: 'Tokens';
  accessToken: string;
  refreshToken: string;
};

export const getAuthToken = async (): Promise<string | null> => {
  const tokenData = await getAuthTokenData();
  return tokenData ? tokenData.accessToken : null;
};

export const restartStore = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<void> => {
  await resetStore(client);
};

export const setAuthToken = async (
  token: AuthTokenData,
  client: ApolloClient<NormalizedCacheObject>,
): Promise<void> => {
  await AsyncStorage.setItem('@token', JSON.stringify(token));
  await restartStore(client);
};

export const clearAuthToken = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<void> => {
  await AsyncStorage.removeItem('@token');
  await restartStore(client);
};

export const clearAuthUser = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<void> => {
  await AsyncStorage.removeItem('@token');
  await AsyncStorage.removeItem('@auth_user');
  await restartStore(client);
};

export const getAuthTokenData = async (): Promise<AuthTokenData | null> => {
  const authToken = await AsyncStorage.getItem('@token');
  return authToken ? JSON.parse(authToken) : null;
};

export const resetStore = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
): Promise<void> => {
  await apolloClient.clearStore();
};
