import { domainListRs } from '../dto/domain-list.dto';

export class domainMapper {
  static toDomainListRs(domain): domainListRs {
    return {
      id: domain._id,
      name: domain.name,
      isActive: domain.isActive,
      createdAt: new Date(domain.createdAt).toLocaleDateString(),
    };
  }
}
