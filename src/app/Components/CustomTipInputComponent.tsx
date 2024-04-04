import { Button, Modal, Tooltip } from "flowbite-react";
import { useRef, useState } from "react";

export function CustomTipInputComponent(props: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [openModal, setOpenModal] = useState(false);
  const customTip = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button gradientDuoTone="pinkToOrange" onClick={() => setOpenModal(true)}>
        Custom
      </Button>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        initialFocus={customTip}
        dismissible
      >
        <Modal.Header>How Much Do You Want To Tip?</Modal.Header>
        <Modal.Body>
          <div className="flex justify-center py-1 rounded-md text-black text-lg">
            <input
              type="number"
              name="custom tip"
              placeholder="Input custom tip"
              onChange={props.onChange}
              ref={customTip}
            />

            <div className="pl-2 text-lg">%</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            gradientDuoTone="pinkToOrange"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
