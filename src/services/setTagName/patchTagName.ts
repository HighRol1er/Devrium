import { BASE_URL } from '@/shared/constant/baseUrl';
import { requestOptions } from '../fetch/requestOption';

export const patchTagName = async (userId: string, tagName: string) => {
  const response = await fetch(
    `${BASE_URL}/api/user/${userId}/tagname`,
    requestOptions('PATCH', { tagName })
  );

  if (!response.ok) {
    console.error('Failed to set tag name');
  }

  return response.json();
};
