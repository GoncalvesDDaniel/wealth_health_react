# Modal Component

A simple, reusable modal component for React. Displays content in a centered dialog with an overlay.

## Props

-   `isOpen` (boolean, required): Controls if the modal is visible.
-   `onClose` (function, required): Callback function to close the modal.
-   `children` (React.ReactNode, optional): Content to be displayed inside the modal.

## Basic Usage

```jsx
<Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
    <p>This is the modal content!</p>
</Modal>
```

## CSS Styling

-   .modal-overlay: Styles the full-screen backdrop.
-   .modal-content: Styles the dialog box itself.
-   .modal-close-button: Styles the 'X' close button.
-   .modal-body: Styles the container for the children content.
