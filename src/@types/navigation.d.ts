export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      PageA: undefined;
      PageB: {user:{
        name:string,
        cpf:string
      }} | undefined;
      PageC: {numero: number} | undefined;
      PageD: undefined;
      PageE: undefined;
      NavigationDrawer: undefined;
      NavigationTab: undefined;
    }
  }
}
