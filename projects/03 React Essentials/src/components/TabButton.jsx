export default function TabButton({
  children,
  onSelect,
  isSelected,
  ...props
}) {
  return (
    <li>
      <button
        className={isSelected ? 'active' : ''}
        onClick={onSelect}
        {...props}
      >
        {children}
      </button>
    </li>
  )
}
