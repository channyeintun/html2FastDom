import { bootstrap } from 'faster-dom';
import { createSimpleFor } from './app/components/simpleFor';
import { createExampleAttr } from './app/components/attrs';
import { createCounter } from './app/components/simpleCounter';
import { createStyles } from './app/components/styles';

bootstrap('#styles', createStyles);

bootstrap('#attrs', createExampleAttr);

bootstrap('#counter', createCounter);

bootstrap('#simple_for_component', createSimpleFor);