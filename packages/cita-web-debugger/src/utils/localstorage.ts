export enum LocalStorageKey {
  ACTIVE_ACCOUNT_INDEX = 'ACTIVE_ACCOUNT_INDEX',
  LOCAL_PWD = 'LOCaL_PWD',
  PRIVATE_KEY = 'PRIVATE_KEY',
  CHAIN_IP = 'CHAIN_IP',
}

const local = {
  get activeAccountIndex() {
    const idx = Number(window.localStorage.getItem(LocalStorageKey.ACTIVE_ACCOUNT_INDEX))
    return idx
  },
  set activeAccountIndex(idx: number) {
    window.localStorage.setItem(LocalStorageKey.ACTIVE_ACCOUNT_INDEX, '' + idx)
  },
  get localPwd() {
    return window.localStorage.getItem(LocalStorageKey.LOCAL_PWD) || ''
  },
  set localPwd(pwd: string) {
    window.localStorage.setItem(LocalStorageKey.LOCAL_PWD, pwd || '')
  },
  // get privateKey() {
  //   return window.localStorage.getItem(LocalStorageKey.PRIVATE_KEY) || ''
  // },
  // set privateKey(p: string) {
  //   window.localStorage.setItem(LocalStorageKey.PRIVATE_KEY, p || '')
  // },
  set chain(ip: string) {
    window.localStorage.setItem(LocalStorageKey.CHAIN_IP, ip)
  },
  get chain() {
    return window.localStorage.getItem(LocalStorageKey.CHAIN_IP) || ''
  },
}
export default local
