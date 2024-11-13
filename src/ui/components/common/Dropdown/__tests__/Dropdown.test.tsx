import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { Dropdown } from '@/ui/components';

jest.mock('@/hooks', () => ({
  useOutsideClick: jest.fn()
}));

describe('Dropdown Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockSetIsNoteVisible = jest.fn();

  const renderDropdown = (props = {}) =>
    render(
      <Dropdown setVisible={mockSetIsNoteVisible} isOpen={true} {...props}>
        <div data-testid="dropdown-content">Dropdown Content</div>
      </Dropdown>
    );

  test('renders the component with label and icon', () => {
    renderDropdown();

    expect(screen.getByText('products notes')).toBeInTheDocument();
    expect(screen.getByAltText('arrow icon')).toBeInTheDocument();
  });

  test('toggles visibility on label click', () => {
    renderDropdown({ isOpen: false });

    const label = screen.getByText('products notes');
    fireEvent.click(label);

    expect(mockSetIsNoteVisible).toHaveBeenCalledWith(true);
  });

  test('shows children when isOpen is true', () => {
    renderDropdown({ isOpen: true });

    expect(screen.getByTestId('dropdown-content')).toBeInTheDocument();
  });

  test('does not show children when isOpen is false', () => {
    renderDropdown({ isOpen: false });

    expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument();
  });

  test('should be render match to snapshot', () => {
    const { container } = renderDropdown();

    expect(container).toMatchSnapshot();
  });
});
