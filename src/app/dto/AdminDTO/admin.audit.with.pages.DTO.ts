import {AdminAudit} from "./admin.audit.DTO";

export class AdminAuditWithPagesDTO {
  adminAudit: AdminAudit[];
  totalPages: number;


  constructor(adminAudit: AdminAudit[], totalPages: number) {
    this.adminAudit = adminAudit;
    this.totalPages = totalPages;
  }
}
