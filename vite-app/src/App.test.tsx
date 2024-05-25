import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('renders the App and Header components, calls fetch', () => {
    render(<App />)
    expect(screen.getByText(/App header/i))
    expect(screen.getByText(/Click on the Vite and React logos to learn more/i))
    expect(global.fetch).toHaveBeenCalledTimes(1);
  })
})