import { VuexModule, Module, Mutation, Action, MutationAction } from 'vuex-module-decorators';

@Module({ namespaced: true })
class LoginModule extends VuexModule {
    public counter = 0;

    @Mutation
    public setCounter(newCounter: number): void {
        this.counter = newCounter;
    }

    @Action
    public updateCounter(newCounter: number): void {
        this.context.commit('setCounter', newCounter);
    }

}
export default LoginModule;