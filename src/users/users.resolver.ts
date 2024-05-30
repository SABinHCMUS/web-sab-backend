import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './users.service';
import { Profile } from './entities/profile.entity';

@Resolver('User')
export class UserResolver {
  constructor(private UserService: UserService) {}

  @Query(() => [Profile])
  async getAllUser(): Promise<Profile[]> {
    try {
      const response = await this.UserService.findAllUser();
      return response;
    } catch (error) {
      console.error('Error generating response from Gemini:', error);
      throw error;
    }
  }
}
