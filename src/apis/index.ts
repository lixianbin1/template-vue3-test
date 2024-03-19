import require from './require'

const auto = import.meta.env.VITE_APP_Auto
const network = import.meta.env.VITE_APP_NetWork

interface HomeResponse {
  name: string;
}
export const HomeJson = function (params?:object):Promise<HomeResponse> {
  return require({
    url: `${network}/${auto}/text.json`,
    method: 'get',
    params,
  })
}