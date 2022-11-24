import { Dialog } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  children: any;
}

function SimpleDialog({ onClose, open, children }: SimpleDialogProps) {
  return (
    <Dialog onClose={onClose} open={open}>
      {children}
    </Dialog>
  );
}

export default SimpleDialog;
