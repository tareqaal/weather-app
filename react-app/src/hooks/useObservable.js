import React  from 'react';
import { of } from 'rxjs'
import { tap, switchMap, filter, catchError, debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

export const useObservable = (observable, stateSetter, loadingSetter) => {

    React.useEffect(() => {
        let subscription = observable.pipe(
            filter(name => name.length > 1),
            debounceTime(750),
            distinctUntilChanged(),
            tap(() => loadingSetter(true)),
            switchMap(city =>
                ajax(`/weatherApi/getByCity/?city=${city}`)
                .pipe(
                    mergeMap(ajaxResponse => of(ajaxResponse.response)),
                    catchError(error => of({error: true, body: error.message})),
                )
            )
        )
        .subscribe(result => {
            stateSetter(currentState => Object.assign({}, currentState, result )),
            loadingSetter(false);
        });

        return () => subscription.unsubscribe();
    },[observable, stateSetter, loadingSetter])
};