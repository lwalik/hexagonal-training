import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllEmployeeDtoPort } from '../../../application/ports/secondary/gets-all-employee.dto-port';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsEmployeeDtoPort } from '../../../application/ports/secondary/adds-employee.dto-port';
import { GetsOneEmployeeDtoPort } from '../../../application/ports/secondary/gets-one-employee.dto-port';

@Injectable()
export class FirebaseEmployeesService
  implements
    GetsAllEmployeeDtoPort,
    AddsEmployeeDtoPort,
    GetsOneEmployeeDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<EmployeeDTO>): Observable<EmployeeDTO[]> {
    return this._client
      .collection<EmployeeDTO>('employees', (ref) =>
        ref.orderBy('department.id')
      )
      .valueChanges({ idField: 'id' })
      .pipe(map((data: EmployeeDTO[]) => filterByCriterion(data, criterion)));
  }

  add(employee: Partial<EmployeeDTO>): void {
    this._client.collection('employees').add(employee);
  }

  getOne(id: string): Observable<EmployeeDTO> {
    return this._client
      .doc<EmployeeDTO>('employees/' + id)
      .valueChanges({ idField: 'id' });
  }
}
