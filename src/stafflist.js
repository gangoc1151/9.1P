import faker from "faker";

const stafflist = [
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
  {
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    description: faker.name.jobTitle(),
  },
];

export default stafflist;
