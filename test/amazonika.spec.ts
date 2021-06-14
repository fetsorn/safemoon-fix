import { ethers, waffle } from 'hardhat'
import { SafeMoon } from '../typechain/SafeMoon'

const createFixtureLoader = waffle.createFixtureLoader

describe('Amazonika', () => {
  const [wallet, other] = waffle.provider.getWallets()

  let safemoon: SafeMoon

  const fixture = async () => {
    const safemoonFactory = await ethers.getContractFactory('SafeMoon')
    return (await safemoonFactory.deploy()) as SafeMoon
  }

  let loadFixture: ReturnType<typeof createFixtureLoader>

  before('create fixture loader', async () => {
    loadFixture = createFixtureLoader([wallet, other])
  })

  beforeEach('deploy safemoon', async () => {
    safemoon = await loadFixture(fixture)
  })

})
