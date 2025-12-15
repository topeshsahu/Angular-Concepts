import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface Details {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  address: FormArray<FormGroup<AddressObject>>;
}

export interface AddressObject {
  street: FormControl<string | null>;
  city: FormControl<string | null>;
  country: FormControl<string | null>;
}
