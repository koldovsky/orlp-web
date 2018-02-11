import {Component, OnInit} from '@angular/core';
import {AdminAudit} from '../../../dto/AdminDTO/admin.audit.DTO';
import {AdminAuditService} from './admin.audit.service';
import {TableColumnDTO} from '../../../dto/TableColumnDTO';

@Component({
  providers: [AdminAuditService],
  templateUrl: ('./admin.audit.component.html'),
  styleUrls: ['./admin.audit.style.css']
})

export class AdminAuditComponent implements OnInit {
  auditList: AdminAudit[];
  public actionSort = true;
  courseColumns: TableColumnDTO[] = [new TableColumnDTO('accountEmail', 'E-mail', '\u2191'),
    new TableColumnDTO('action', 'Action', ''),
    new TableColumnDTO('ipAddress', 'Ip-address', ''),
    new TableColumnDTO('role', 'Role', ''),
    new TableColumnDTO('time', 'Time', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  public currentPage = 1;
  public lastPage: number;


  constructor(private adminAuditService: AdminAuditService) {
  }

  ngOnInit(): void {
    this.getAudit(this.currentPage);
  }

  getAudit(numberPage: number) {
    this.adminAuditService.getFullAuditList(numberPage, this.selectedSortedParam.nameColumnParam, this.actionSort)
      .subscribe(value => {
        this.auditList = value.adminAudit;
        this.lastPage = value.totalPages;
        this.currentPage = numberPage;
      });
  }

  public sortBy(param: TableColumnDTO) {
    if (param === this.selectedSortedParam) {
      this.actionSort = !this.actionSort;
    } else {
      this.actionSort = true;
      this.selectedSortedParam.symbolSorting = '';
    }
    if (this.actionSort) {
      param.symbolSorting = '\u2191';
    } else {
      param.symbolSorting = '\u2193';
    }
    this.selectedSortedParam = param;
    this.getAudit(this.currentPage);
  }

}
