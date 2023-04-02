export function Logo(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="10"
      fill="none"
      viewBox="0 0 131 40"
      {...props}
    >
      <text
        x="20"
        y="28"
        fill="#2563EB"
        fontSize="24"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        Botcraft Studio
      </text>
    </svg>
  )
}
