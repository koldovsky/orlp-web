import {Component, OnInit} from '@angular/core';
import {AdminAudit} from '../../../dto/AdminDTO/admin.audit.DTO';
import {AdminAuditService} from './admin.audit.service';
import {TableColumnDTO} from "../../../dto/TableColumnDTO";

@Component({
  providers: [AdminAuditService],
  templateUrl: ('./admin.audit.component.html'),
  styleUrls: ['./admin.audit.style.css']
})

export class AdminAuditComponent implements OnInit {
  auditList: AdminAudit[];
  emailAsc = true;
  actionAsc = true;
  ipAsc = true;
  roleAsc = true;
  timeAsc = true;
  public actionSort = true;
  courseColumns: TableColumnDTO[] = [new TableColumnDTO('accountEmail', 'E-mail', '\u2191'),
    new TableColumnDTO('action', 'Action', ''),
    new TableColumnDTO('ipAddress', 'Ip-address', ''),
    new TableColumnDTO('role', 'Role', ''),
    new TableColumnDTO('time', 'Time', '')];
  selectedSortedParam: TableColumnDTO = this.courseColumns[0];
  public currentPage: number = 1;
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
    }else {
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

  public toggleEmail(): void {
    this.emailAsc = !this.emailAsc;
    if (this.emailAsc) {
      this.getAuditListSortedByAccountEmailDesc();
    } else {
      this.getAuditListSortedByAccountEmailAsc();
    }
  }

  public toggleAction(): void {
    this.actionAsc = !this.actionAsc;
    if (this.actionAsc) {
      this.getAuditListSortedByActionDesc();
    } else {
      this.getAuditListSortedByActionAsc();
    }
  }

  public toggleIp(): void {
    this.ipAsc = !this.ipAsc;
    if (this.ipAsc) {
      this.getAuditListSortedByIpAddressDesc();
    } else {
      this.getAuditListSortedByIpAddressAsc();
    }
  }

  public toggleRole(): void {
    this.roleAsc = !this.roleAsc;
    if (this.roleAsc) {
      this.getAuditListSortedByRoleDesc();
    } else {
      this.getAuditListSortedByRoleAsc();
    }
  }

  public toggleTime(): void {
    this.timeAsc = !this.timeAsc;
    if (this.timeAsc) {
      this.getAuditListSortedByTimeDesc();
    } else {
      this.getAuditListSortedByTimeAsc();
    }
  }

  public getAuditListSortedByAccountEmailAsc(): void {
    this.adminAuditService.getAuditListSortedByAccountEmailAsc()
      .subscribe(auditList => this.auditList = auditList);
  }

  public getAuditListSortedByAccountEmailDesc(): void {
    this.adminAuditService.getAuditListSortedByAccountEmailDesc()
      .subscribe(auditList => this.auditList = auditList);
  }

  public getAuditListSortedByActionAsc(): void {
    this.adminAuditService.getAuditListSortedByActionAsc()
      .subscribe(auditList => this.auditList = auditList);
  }

  public getAuditListSortedByActionDesc(): void {
    this.adminAuditService.getAuditListSortedByActionDesc()
      .subscribe(auditList => this.auditList = auditList);
  }

  public getAuditListSortedByIpAddressAsc(): void {
    this.adminAuditService.getAuditListSortedByIpAddressAsc()
      .subscribe(auditList => this.auditList = auditList);
  }

  public getAuditListSortedByIpAddressDesc(): void {
    this.adminAuditService.getAuditListSortedByIpAddressDesc()
      .subscribe(auditList => this.auditList = auditList);
  }

  public getAuditListSortedByTimeAsc(): void {
    this.adminAuditService.getAuditListSortedByTimeAsc()
      .subscribe(auditList => this.auditList = auditList);
  }

  public getAuditListSortedByTimeDesc(): void {
    this.adminAuditService.getAuditListSortedByTimeDesc()
      .subscribe(auditList => this.auditList = auditList);
  }

  public getAuditListSortedByRoleAsc(): void {
    this.adminAuditService.getAuditListSortedByRoleAsc()
      .subscribe(auditList => this.auditList = auditList);
  }

  public getAuditListSortedByRoleDesc(): void {
    this.adminAuditService.getAuditListSortedByRoleDesc()
      .subscribe(auditList => this.auditList = auditList);
  }
}
