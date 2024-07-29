import Constants from 'expo-constants';
import { ExtraManifest } from './src/types';

const manifest = Constants.manifest as ExtraManifest | null;

export const GOOGLE_API_KEY: string = manifest?.extra?.googleApiKey ?? 'your_google_Api_Key';
export const GOOGLE_API_URL: string = manifest?.extra?.googleApiUrl ?? 'https://places.googleapis.com/v1/';
