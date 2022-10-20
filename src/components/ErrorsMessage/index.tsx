import { IoMdInformationCircle } from 'react-icons/io';

interface iErrorsMessageProps{
  errors: any;
  id: string;
}

const ErrorsMessage = ({errors, id}:iErrorsMessageProps) => {
  return (
    <>
        {errors[id] && (
            <p>
              {errors[id].message}
              <IoMdInformationCircle />
            </p>
          )}
    </>
  )
}

export default ErrorsMessage