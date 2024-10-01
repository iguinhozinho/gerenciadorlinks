import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage";

export type linkStorage = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function get(): Promise<linkStorage[]> {
  const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function save(newLink: linkStorage) {
  try {
    const storage = await get();
    const updated = JSON.stringify([...storage, newLink]);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, updated);
  } catch (error) {
    throw error;
  }
}

async function remove(id: string) {
  try {
    const storage = await get();

    const updated = storage.filter((link) => link.id !== id);

    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(updated));

  } catch (error) {
    throw error;
  }
}

export const LinkStorage = { get, save, remove };