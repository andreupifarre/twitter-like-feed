import { renderHook, act } from '@testing-library/react-hooks';
import useFetchData from './useFetchData';

afterEach(() => {
  jest.clearAllMocks();
});

const mockFetch = (ok, response) =>
  jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
      Promise.resolve({ ok, json: () => Promise.resolve(response) }),
    );

describe('useFetchData', () => {
  it('should set results array', async () => {
    const mockSuccessResponse = [
      {
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixage/128.jpg',
        text:
          '10001. "It is straight enough. I should like to know who sold you the\ngeese which you supplied to the Alpha."',
        username: 'Ferne.Dickinson1',
      },
      {
        image:
          'https://s3.amazonaws.com/uifaces/faces/twitter/kazaky999/128.jpg',
        text:
          '10000. Godfrey\nNorton, as our client is to its coming to the eyes of his\nprincess.',
        username: 'Jena_Heller',
      },
    ];

    mockFetch(true, mockSuccessResponse);

    const { result } = renderHook(() => useFetchData(0));
    await act(async () => result.current);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(result.current).toEqual(mockSuccessResponse);
  });
});
