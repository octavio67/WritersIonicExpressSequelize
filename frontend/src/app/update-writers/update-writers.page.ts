import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WriterService } from '../services/writer.service';

@Component({
  selector: 'app-update-writers',
  templateUrl: './update-writers.page.html',
  styleUrls: ['./update-writers.page.scss'],
})
export class UpdateWritersPage implements OnInit {
  updateUserForm: FormGroup;
  id: any;


  constructor(
    private writerService: WriterService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.findWriter(this.id);
    this.updateUserForm = this.formBuilder.group({
      nombre: [''],
      fechas: [''],
      pais: [''],
    });
  }

  findWriter(id) {
    this.writerService.getWriter(this.id).subscribe((data) => {
      this.updateUserForm.setValue({
        nombre: data['nombre'],
        fechas: data['fechas'],
        pais: data['pais'],
      });
    });
  }

  onSubmit() {
    if (!this.updateUserForm.valid) {
      return false;
    } else {
      this.writerService
        .updateWriter(this.id, this.updateUserForm.value)
        .subscribe(() => {
          this.updateUserForm.reset();
          this.router.navigate(['/list-writers']);
        });
    }
  }
}
