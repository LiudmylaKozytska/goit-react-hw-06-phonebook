import Swal from 'sweetalert2';

export const alertContactInclude = name => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${name} is already in contacts`,
  });
};

export const alertAddContactSuccess = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your contact has been saved',
    showConfirmButton: false,
    timer: 1500,
  });
};
