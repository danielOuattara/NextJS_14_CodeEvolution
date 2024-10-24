import "./style.css";

type TypeProps = {
  modalSlot: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout(props: TypeProps) {
  return (
    <>
      {props.modalSlot}
      {props.children}
    </>
  );
}
