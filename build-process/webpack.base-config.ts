import { resolve } from 'path';

const PROJECT_DIR = resolve(__dirname, '../');

export interface IGetConfigOptions {
    isDev?: boolean;
}

export function getConfig(options: IGetConfigOptions = {}) {
    console.log('getConfig', PROJECT_DIR);
    return {
        mode: options.isDev ? 'development' : 'production',
        resolve: {
            modules: ['node_modules', resolve(PROJECT_DIR, 'src')],
        },
        plugins: [],
        module: {
            rules: [
                {
                    test: /\.component\.scss$/,
                    include: [resolve(PROJECT_DIR, 'src/app')],
                    use: [
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    resolve(
                                        PROJECT_DIR,
                                        'src/assets/scss/common/_common.scss'
                                    ),
                                ],
                            },
                        },
                    ],
                },
            ],
        },
    };
}
