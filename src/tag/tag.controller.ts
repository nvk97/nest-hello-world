import { Controller, HttpCode, Post, Query } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
  @Post()
  @HttpCode(204)
  async createTag(@Query('name') name): Promise<InsertResult> {
    return await this.tagService.createTag(name);
  }
}
