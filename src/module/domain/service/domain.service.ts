import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDomainDto } from '../model/dto/create-domain.dto';
import { UpdateDomainDto } from '../model/dto/update-domain.dto';
import { domainMapper } from '../model/mapper';
import { DomainDocument } from '../schemas/domain.schema';

@Injectable()
export class DomainService {
  constructor(
    @InjectModel('Domain')
    private readonly _domainModel: Model<DomainDocument>,
  ) {}

  async create(data: CreateDomainDto) {
    let domain = await new this._domainModel({
      name: data.domainName,
    })
      .save()
      .catch((error) => {
        if (error.code === 11000) {
          throw new BadRequestException(
            `Domain name ${data.domainName} already exist in the system`,
          );
        } else {
          throw error;
        }
      });
    return {
      id: domain._id,
    };
  }

  async findAll() {
    let domainList = await this._domainModel.find().exec();
    if (domainList.length <= 0) {
      throw new NotFoundException(`No Domains found`);
    }
    return domainList.map(domainMapper.toDomainListRs);
  }

  async findOne(id: string) {
    let domain = await this._domainModel.findOne({ _id: id }).catch((error) => {
      throw new InternalServerErrorException(error);
    });
    if (!domain) {
      throw new NotFoundException(`domain not found`);
    }
    return domainMapper.toDomainListRs(domain);
  }

  async update(id: string, data: UpdateDomainDto) {
    await this._domainModel
      .updateOne(
        { _id: id },
        { name: data.domainName, isActive: data.isActive },
      )
      .catch((error) => {
        throw new InternalServerErrorException(error);
      });
    return {
      message: 'updated',
    };
  }

  async remove(id: string) {
    await this._domainModel
      .deleteOne({ _id: id })
      .exec()
      .catch((error) => {
        console.log(error);
        throw new InternalServerErrorException(
          `We are finding it difficult to delete this domain`,
        );
      });
    return {
      message: 'deleted',
    };
  }
}
