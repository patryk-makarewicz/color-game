type CustomButtonProps = {
  children: React.ReactNode;
  kind?: 'default' | 'secondary';
};

export type ButtonProps = CustomButtonProps & React.HTMLProps<HTMLButtonElement>;

export const Button = ({ children, kind = 'default', ...props }: ButtonProps) => (
  <button
    {...props}
    type="button"
    className={`${(kind === 'default' || kind === 'secondary') && 'rounded px-4 py-1'}
    ${kind === 'default' ? 'bg-appPrimary text-white hover:opacity-90' : 'bg-white text-appPrimary hover:bg-sky-50'}
    border border-appPrimary font-normal transition duration-300 ease-in-out`}>
    {children}
  </button>
);
