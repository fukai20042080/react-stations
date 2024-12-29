import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { imageUrl, fetchMock } from './mock/fetch';
import { create } from 'react-test-renderer';

describe('<App />', () => {
  const fetch = vi.fn();
  window.fetch = fetch;
  fetch.mockImplementation(fetchMock);

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Can mount <App />', async () => {
    const App = await import('../src/App').then(module => module.default);
    expect(App).toBeTruthy(); // コンポーネントが存在するか確認
    const res = render(<App />); // Appコンポーネントをレンダリング
    expect(res.container).toBeTruthy(); // コンポーネントのレンダリング結果がtruthyであることを確認
  });

  it('Can mount <Header />', async () => {
    const Header = await import('../src/Header').then(module => module.default);
    expect(Header).toBeTruthy(); // コンポーネントが存在するか確認
    const res = render(<Header />);
    expect(res.container).toBeTruthy();
  });

  it('Can mount <Description />', async () => {
    const Description = await import('../src/components/Description').then(module => module.default);
    expect(Description).toBeTruthy(); // コンポーネントが存在するか確認
    const res = render(<Description />); // Descriptionコンポーネントをレンダリング
    expect(res.container).toBeTruthy(); // コンポーネントがtruthyであることを確認
  });

  it('Can mount <DogImage />', async () => {
    const DogImage = await import('../src/DogImage').then(module => module.default);
    expect(DogImage).toBeTruthy(); // コンポーネントが存在するか確認
    const res = render(<DogImage imageUrl={imageUrl} />); // DogImageコンポーネントをレンダリング
    expect(res.container).toBeTruthy(); // コンポーネントがtruthyであることを確認
  });

  it('<DogImage /> has a prop called `url`', async () => {
    const DogImage = await import('../src/DogImage').then(module => module.default);
    expect(DogImage).toBeTruthy();

    let res = await render(<DogImage imageUrl={imageUrl} />);
    const dogImage = res.container.querySelector('img');
    expect(dogImage).toBeTruthy();
    expect(dogImage!.src).toStrictEqual(imageUrl);
  });
});

