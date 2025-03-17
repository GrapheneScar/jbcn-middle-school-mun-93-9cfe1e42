
import { RegisterButton as UIRegisterButton } from "./ui/register-button";

interface RegisterButtonProps {
  className?: string;
}

const RegisterButton = ({ className = '' }: RegisterButtonProps) => {
  return (
    <UIRegisterButton className={className} />
  );
};

export default RegisterButton;
